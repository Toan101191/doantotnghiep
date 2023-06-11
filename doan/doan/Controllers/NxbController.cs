using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;
using doan.Model;

namespace doan.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class NxbController : Controller
    {
        private readonly IConfiguration _configuration;
        public NxbController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [Route("getbyid")]
        [HttpGet]
        public JsonResult Getbyid(int id)
        {
            string query = "select manxb, tennxb,sdt,diachi, email from Nxb where manxb=" + id;
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
            string query = "select manxb, tennxb,sdt,diachi, email from Nxb";
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
        public JsonResult Post(Nxb nxb)
        {
            string query = @"Insert into Nxb values
                (
                        N'" + nxb.tennxb + "'" +
                         ",'" + nxb.diachi + "'" +
                        ",'" + nxb.sdt + "'" +
                        ",'" + nxb.email + "'" +
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
        public JsonResult Put(Nxb  nxb)
        {
            string query = @"Update Nxb set
                tennxb = N'" + nxb.tennxb + "',"
            + "diachi =N'" + nxb.diachi + "',"
             + "sdt ='" + nxb.sdt + "',"
            + "email ='" + nxb.email + "'"
            + "where manxb = " + nxb.manxb;

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
            string query = @"Delete from Nxb where manxb =" + id;

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
