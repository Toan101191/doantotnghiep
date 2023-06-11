using System.Security.Cryptography;
using System.Text;

namespace doan
{
    public class Utils
    {
        //chuyển tử chuối sang md5
        public static string GetMd5Hash(string input)
        {
            using (MD5 md5 = MD5.Create())
            {
                byte[] inputBytes = Encoding.UTF8.GetBytes(input);
                byte[] hashBytes = md5.ComputeHash(inputBytes);

                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < hashBytes.Length; i++)
                {
                    sb.Append(hashBytes[i].ToString("x2"));
                }

                return sb.ToString();
            }
        }
        //chuyển từ mã md5 về chuỗi ban đầu
        public static string GetStringFromMd5Hash(string md5Hash)
        {
            byte[] hashBytes = new byte[md5Hash.Length / 2];
            for (int i = 0; i < hashBytes.Length; i++)
            {
                hashBytes[i] = Convert.ToByte(md5Hash.Substring(i * 2, 2), 16);
            }

            string originalString = Encoding.UTF8.GetString(hashBytes);

            return originalString;
        }
    }
}
