using MyApplication.DTO;
using MyApplication.Service;
using System;
using System
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyApplication.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            var service = new MyListService();

            var student = new StudentDTO("Student 1", 8);
            var student2 = new StudentDTO("Student 2", 6.6);
            var student3 = new StudentDTO("Student 3", 8);
            var student4 = new StudentDTO("Student 4", 6.6);
            var student5 = new StudentDTO("Student 5", 8);
            var student6 = new StudentDTO("Student 6", 6.6);

            //service.AddStudent(student);
            //service.AddStudent(student2);

            var myParam = new List<StudentDTO>();
            myParam.Add(student4);
            myParam.Add(student5);

            var secondList = new List<StudentDTO>();
            secondList.AddRange(myParam);
            var service1 = new MyListService(myParam);

            service.DisplayStudentList();

            System.Console.Read();
            
        }
    }
}
