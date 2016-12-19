using ClassroomManager.Api.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ClassroomManager.Api.Infrastructure
{
    public class ClassroomDataContext : DbContext
    {
        public ClassroomDataContext() : base("Classroom")
        {
        }

        public IDbSet<Class> Classes { get; set; }
        public IDbSet<Enrollment> Enrollments { get; set; }
        public IDbSet<Student> Students { get; set; }
        public IDbSet<Teacher> Teachers { get; set; }

        // Relations

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            // teacher has many classes
            modelBuilder.Entity<Teacher>()
                .HasMany(t => t.Classes)
                .WithOptional(c => c.Teacher)
                .HasForeignKey(c => c.TeacherId);

            // student has many enrollments

            modelBuilder.Entity<Student>()
                .HasMany(s => s.Enrollments)
                .WithRequired(e => e.Student)
                .HasForeignKey(e => e.StudentId);

            // class has many enrollments
            modelBuilder.Entity<Class>()
                .HasMany(c => c.Enrollments)
                .WithRequired(e => e.Class)
                .HasForeignKey(e => e.ClassId);

            // Compound Key
            modelBuilder.Entity<Enrollment>()
                .HasKey(e => new { e.ClassId, e.StudentId });
        }

    }
}