using MyApplication.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyApplication.Service
{
    public class MyListService
    {
        private List<StudentDTO> _myStudentList;

        public MyListService()
        {
            this._myStudentList = new List<StudentDTO>();
        }

        public MyListService(List<StudentDTO> studentList)
        {
            this._myStudentList = studentList;
        }

        public void AddStudent(StudentDTO student)
        {
            this._myStudentList.Add(student);
        }

        public void DisplayStudentList()
        {
            Console.WriteLine("------------------------------------");
            Console.WriteLine("--------- My Student List ----------");
            Console.WriteLine("------------------------------------");
            foreach (var item in this._myStudentList)
            {
                Console.WriteLine("Student Name : " + item.StudentName);
                Console.WriteLine("Mark         : " + item.StudentMark);
            }
            Console.WriteLine("------------------------------------");
        }
    }
}
