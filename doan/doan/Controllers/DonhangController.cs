using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;
using doan.Model;
using System;

namespace doan.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class DonhangController : Controller
    {
        private readonly IConfiguration _configuration;
        public DonhangController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [Route("getbyid")]
        [HttpGet]
        public JsonResult Getbyid(int id)
        {
            string query = "SELECT donhang.madon, donhang.tinhtrang, donhang.mahd, donhang.makh, K.tenkh, H.gia " +
                           "FROM donhang " +
                           "JOIN khachhang K ON donhang.makh = K.makh " +
                           "JOIN hoadon H ON donhang.mahd = H.mahd " +
                           "WHERE donhang.makh = " + id +
                           " ORDER BY donhang.tinhtrang ASC;"; 
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
        [Route("getbyid1")]
        [HttpGet]
        public JsonResult Getbyid1(int id)
        {
            string query = "select madon,tinhtrang,donhang.mahd,donhang.mact,donhang.makh,K.tenkh,H.gia from donhang join khachhang K on donhang.makh=K.makh join hoadon H on donhang.mahd = H.mahd  where donhang.madon=" + id ;
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
            string query = "select madon,tinhtrang,donhang.makh,K.tenkh,H.gia from donhang join khachhang K on donhang.makh = K.makh join hoadon H on donhang.mahd = H.mahd order by tinhtrang ASC";
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
        [HttpPut]
        public JsonResult Put(Donhang donhang)
        {
            string query = @"Update Donhang set
            tinhtrang ='" + donhang.tinhtrang + "',"
            +"mahd ='" + donhang.mahd + "',"
            +"mact ='" + donhang.mact + "',"
            +"makh ='" + donhang.makh + "'"
            + "where madon = " + donhang.madon;

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
            string query = @"Delete from Donhang where madon =" + id;

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
