using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;
using doan.Model;

namespace doan.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class ChitiethoadonController : Controller
    {
        private readonly IConfiguration _configuration;
        public ChitiethoadonController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
       
        [Route("getbyid")]
        [HttpGet]
        public JsonResult Getbyid(int id)
        {
            string query = "select mact,T.tentruyen,T.hinhanh,T.gia,chitiethoadon.soluong from chitiethoadon join  truyen T on chitiethoadon.matruyen = T.matruyen where mahd=" + id;
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

        [Route("getkh")]
        [HttpGet]
        public JsonResult Getkh(int id)
        {
            string query = "select K.makh,K.tenkh,K.sdt,K.diachi  from Hoadon  join khachhang K on Hoadon.makh = K.makh where Hoadon.mahd = " + id;
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
            string query = "select mahd,matruyen,soluong from Chitiethoadon";
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
        public JsonResult Post(Chitiethoadon chitiethoadon)
        {
            string query = @"Insert into Chitiethoadon values
                (
                        '" + chitiethoadon.mahd + "'" +
                        ",'" + chitiethoadon.matruyen + "'" +
                        ",'" + chitiethoadon.soluong + "'" +
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
}
