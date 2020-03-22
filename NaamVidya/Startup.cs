using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(NaamVidya.Startup))]
namespace NaamVidya
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
