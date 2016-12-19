namespace ClassroomManager.Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SeventhMigration : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Classes", "Description");
            DropColumn("dbo.Classes", "IsNightClass");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Classes", "IsNightClass", c => c.Boolean(nullable: false));
            AddColumn("dbo.Classes", "Description", c => c.String());
        }
    }
}
