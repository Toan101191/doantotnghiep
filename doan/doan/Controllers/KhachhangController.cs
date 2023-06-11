using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;
using doan.Model;

namespace doan.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class KhachhangController : Controller
    {
        private readonly IConfiguration _configuration;
        public KhachhangController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [Route("login")]
        [HttpGet]

        public JsonResult Login(string username, string password)
        {
            DataTable table = new DataTable();
            string query = $"select * from khachhang where tk='{username}' and mk='{password}'";
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
            //if(table.Rows.Count > 0)
            //{
            //    var value = table.Rows[0]["makh"].ToString();
            //    string token = Utils.GetMd5Hash(value);

            //    return new JsonResult(token);

            //}
            if (table.Rows.Count == 0)
            {
                return new JsonResult("tài khoản hoặc mật khẩu không đúng");
            }
            return new JsonResult(table);

        }
        [Route("getbyid")]
        [HttpGet]
        public JsonResult Getbyid(int id)
        {
            string query = "select khachhang.makh, khachhang.tenkh,khachhang.sdt,khachhang.diachi,khachhang.maquyen, khachhang.tk,khachhang.mk,Q.tenquyen from Khachhang join quyen Q on khachhang.maquyen = Q.maquyen where makh=" + id;
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
        [HttpGet]
        public JsonResult Get()
        {
            string query = "select khachhang.makh, khachhang.tenkh,khachhang.sdt,khachhang.diachi,khachhang.maquyen, khachhang.tk,khachhang.mk,Q.tenquyen from Khachhang join quyen Q on khachhang.maquyen = Q.maquyen;";
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
        [Route("isexist")]
        [HttpGet]
        public bool isExist(string tenk)
        {
            string query = $"select * from Khachhang where tk = '{tenk}'";
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
            if (table.Rows.Count == 0) { return false; }
            return true;

        }
        [HttpPost]
        public JsonResult Post(Khachhang khachhang)
        {
            if (isExist(khachhang.tk))
            {
                return new JsonResult("Da ton tai");
            }
            else
            {
                string query = @"Insert into Khachhang values
                (
                        N'" + khachhang.tenkh + "'" +
                        ",'" + khachhang.sdt + "'" +
                         ",N'" + khachhang.diachi + "'" +
                        ",'" + khachhang.tk + "'" +
                        ",'" + khachhang.mk + "'" +
                         "," + 2 + "" +

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
            
        }
        [HttpPut]
        public JsonResult Put(Khachhang khachhang)
        {
            string query = @"Update Khachhang set
                tenkh = N'" + khachhang.tenkh + "',"
            + "sdt ='" + khachhang.sdt + "',"
            + "diachi =N'" + khachhang.diachi + "',"
            + "maquyen ='" + khachhang.maquyen + "',"
            + "tk ='" + khachhang.tk + "',"
            + "mk ='" + khachhang.mk + "'"
            + "where makh = " + khachhang.makh;

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
            string query = @"Delete from Khachhang where makh =" + id;

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
