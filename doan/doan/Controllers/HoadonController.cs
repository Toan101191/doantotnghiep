using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;
using doan.Model;

namespace doan.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class HoadonController : Controller
    {
        private readonly IConfiguration _configuration;
        public HoadonController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [Route("getbyid")]
        [HttpGet]
        public JsonResult Getbyid(int id)
        {
            string query = "select * from hoadon where mahd=" + id;
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
            string query = "select mahd,hoadon.makh,ngaygd,K.tenkh,K.diachi,K.sdt,hoadon.gia from Hoadon join khachhang K on hoadon.makh=K.makh  order by ngaygd desc ";
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
        //[HttpPost]
        //public JsonResult Post(Hoadon hoadon)
        //{
        //    string query = @"Insert into Hoadon values
        //        (      
        //                '" + hoadon.makh + "'" +
        //                ",'" + hoadon.ngaygd.ToString("yyyy-MM-dd HH:mm:ss") + "'" +
        //                ",'" + hoadon.gia + "'" +
        //         ")";
        //    DataTable table = new DataTable();
        //    string sqlDataSource = _configuration.GetConnectionString("datn");
        //    SqlDataReader myReader;
        //    using (SqlConnection myCon = new SqlConnection(sqlDataSource))
        //    {
        //        myCon.Open();
        //        using (SqlCommand myCommand = new SqlCommand(query, myCon))
        //        {
        //            myReader = myCommand.ExecuteReader();
        //            table.Load(myReader);
        //            myReader.Close();
        //            myCon.Close();
        //        }
        //    }
        //    return new JsonResult("Thêm mới thành công");
        //}
        [HttpPost]
        public JsonResult Post(Hoadonmodel model)
        {
            DateTime ngaygd = DateTime.Now;
            int maHD = new Random().Next(01,9999);
            string query = $"insert into Hoadon(mahd,makh,ngaygd,gia) values ({maHD},{model.hoadon.makh},'{model.hoadon.ngaygd.ToString("yyyy-MM-dd HH:mm:ss")}',{model.hoadon.gia})";
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
            int maCT =0;
            string query1 ="";
            foreach (var item in model.chitiethoadon)
            {
                maCT = new Random().Next(01, 9999);

                query1 = $"insert into chitiethoadon(mact,makh,mahd,matruyen,soluong) values({maCT},{model.hoadon.makh},{maHD},{item.matruyen},{item.soluong})";
                DataTable table1 = new DataTable();
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query1, myCon))
                    {
                        myReader = myCommand.ExecuteReader();                       
                        table1.Load(myReader);
                        myReader.Close();
                        myCon.Close();
                    }
                }
            }
            
            string query2 = $"insert into donhang(tinhtrang,mahd,mact,makh) values ({1},{maHD},{maCT},{model.hoadon.makh})";
            DataTable table2 = new DataTable();
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query2, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table2.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Thêm mới thành công");
        }
        [HttpDelete]
        public JsonResult Delete(int id)
        {
            string query = @"Delete from Hoadon where mahd =" + id;

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
