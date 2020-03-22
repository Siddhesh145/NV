using System.Web;
using System.Web.Optimization;

namespace NaamVidya
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/angularjs")
              .Include(
                  "~/Scripts/angularjs/angular.js",
                  "~/Scripts/angularjs/angular-ui-router.js",
                  "~/Scripts/angularjs/angular-cookies.js",
                  "~/Scripts/angularjs/angularjs-viewhead.js", 
				  "~/Scripts/angularjs/angular-ui.js"
              ));

            bundles.Add(new ScriptBundle("~/bundles/nvuijs")
                
                .Include(
                  "~/js/autosize.min.js",
                  "~/js/jquery.bxslider.min.js",
                  "~/js/custom.js"

              ));

            bundles.Add(new ScriptBundle("~/bundles/nvappjs")
                .IncludeDirectory("~/Scripts/controller", "*.js")
                .IncludeDirectory("~/Scripts/config", "*.js")
                .IncludeDirectory("~/Scripts/service", "*.js")
                .Include("~/Scripts/nv.js")
                .Include("~/js/Commandirective.js")
                
              );


            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));


            BundleTable.EnableOptimizations = false;
            
        }
       
    }

}
