using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;
using doan.Model;
using System.IO;
using Microsoft.AspNetCore.Hosting;


namespace doan.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class TruyenController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;


        public TruyenController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        [Route("Savefile")]
        [HttpPost]
        public JsonResult Savefile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/Photos/" + filename;

                using(var stream  = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }
                return new JsonResult("Thêm thành công");

            }
            catch (Exception) 
            {
                return new JsonResult("sach.jpg");
            }
        }


        [HttpGet]
        public JsonResult Get()
        {
            string query = "SELECT truyen.matruyen,truyen.soluong,truyen.matl,truyen.matg,truyen.manxb,truyen.tentruyen,truyen.mota,truyen.gia,truyen.hinhanh,NXB.tennxb, TL.tentl, TG.tentg FROM truyen JOIN theloai TL ON truyen.matl = TL.matl Join nxb NXB On truyen.manxb = NXB.manxb JOIN tacgia TG ON truyen.matg = TG.matg;";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("datn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
        [Route("Getbyid")]
        [HttpGet]
        public JsonResult Getbyid(int id)
        {
            string query = "SELECT truyen.matruyen,truyen.soluong,truyen.tentruyen,truyen.mota,truyen.matl,truyen.gia,truyen.hinhanh,NXB.tennxb, TL.tentl, TG.tentg FROM truyen JOIN theloai TL ON truyen.matl = TL.matl Join nxb NXB On truyen.manxb = NXB.manxb JOIN tacgia TG ON truyen.matg = TG.matg where matruyen=" + id;
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("datn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
        [Route("Getbyname")]
        [HttpGet]
        public JsonResult Getbyname(string name)
        {
            string query = "SELECT truyen.matruyen, truyen.soluong,truyen.tentruyen,truyen.mota,truyen.matl,truyen.gia,truyen.hinhanh,NXB.tennxb," +
                " TL.tentl, TG.tentg FROM truyen JOIN theloai TL ON truyen.matl = TL.matl Join nxb NXB On truyen.manxb = NXB.manxb" +
                " JOIN tacgia TG ON truyen.matg = TG.matg where tentruyen like " + "N'%"+name+"%'";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("datn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
        [Route("Getbyidc")]
        [HttpGet]
        public JsonResult Getbyidc(int id)
        {
            string query = "SELECT * FROM Truyen WHERE matl = " + id + " ORDER BY matruyen DESC OFFSET 2 ROWS FETCH NEXT 3 ROWS ONLY";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("datn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
        [Route("Getbycat")]
        [HttpGet]
        public JsonResult Getbycat(int id)
        {
            string query = "select  * from Truyen where matl=" + id;
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("datn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
        [Route("Getnew")]
        [HttpGet]
        public JsonResult Getnew()
        {
            string query = "select top(4) * from truyen order by matruyen desc";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("datn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
        [Route("Getnewhome")]
        [HttpGet]
        public JsonResult Getnewhome()
        {
            string query = "SELECT TOP 8 * FROM truyen ORDER BY NEWID();";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("datn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
        [HttpPost]
        public JsonResult Post(Truyen truyen)
        {
            string query = @"Insert into truyen values
                (
                        N'" + truyen.tentruyen + "'" +
                        ",'" + truyen.matg + "'" +
                        ",'" + truyen.matl + "'" +
                        ",'" + truyen.manxb + "'" +
                        ",N'" + truyen.mota + "'" +
                        ",'" + truyen.hinhanh + "'" +
                         ",'" + truyen.gia + "'" +
                         ",'" + truyen.soluong + "'" +

                 ")";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("datn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Thêm mới thành công");
        }
        [HttpPut]
        public JsonResult Put(Truyen truyen)
        {
            string query = @"Update Truyen set
                tentruyen = N'" + truyen.tentruyen + "',"
            + "matg ='" + truyen.matg + "',"
             + "matl ='" + truyen.matl + "',"
             + "manxb ='" + truyen.manxb + "',"
             + "mota =N'" + truyen.mota + "',"
             + "hinhanh ='" + truyen.hinhanh + "',"
             + "soluong ='" + truyen.soluong + "',"
             + "gia ='" + truyen.gia + "'"

            + "where matruyen = " + truyen.matruyen;

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("datn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Sửa thành công");
        }
        [HttpDelete]
        public JsonResult Delete(int id)
        {
            string query = @"Delete from Truyen where matruyen =" + id;

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("datn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Xoá thành công");
        }
    }
}
