using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;
using doan.Model;

namespace doan.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class TintucController : Controller
    {
        private readonly IConfiguration _configuration;
        public TintucController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [Route("getbyid")]
        [HttpGet]
        public JsonResult Getbyid(int id)
        {
            string query = "select * from Tintuc where matin=" + id;
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
            string query = "select top(4) * from tintuc order by loaitin asc";
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
            string query = "select * from Tintuc";
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
        public JsonResult Post(Tintuc tintuc)
        {
            string query = @"Insert into Tintuc values
                (
                        N'" + tintuc.nd + "'" +
                        ",N'" + tintuc.tieude + "'" +
                        ",'" + tintuc.hinhanh + "'" +
                        ",'" + tintuc.loaitin + "'" +
                        ",'" + tintuc.ngay.ToString("yyyy-MM-dd HH:mm:ss") + "'" +
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
        public JsonResult Put(Tintuc tintuc)
        {
            string query = @"Update Tintuc set
                nd = N'" + tintuc.nd + "',"
            + "tieude =N'" + tintuc.tieude + "',"
            + "hinhanh ='" + tintuc.hinhanh + "',"
            + "loaitin ='" + tintuc.loaitin + "',"
            + "ngay ='" + tintuc.ngay.ToString("yyyy-MM-dd HH:mm:ss") + "'"
            + "where matin = " + tintuc.matin;

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
            string query = @"Delete from Tintuc where matin =" + id;

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
