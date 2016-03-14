using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyApplication.DTO
{
    public class StudentDTO
    {
        public string StudentName { get; set; }
        public double StudentMark { get; set; }

        public StudentDTO()
        {

        }

        public StudentDTO(string name, double mark)
        {
            this.StudentMark = mark;
            this.StudentName = name;
        }
    }
}
