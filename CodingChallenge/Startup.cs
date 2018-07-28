using CodingChallenge.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using CodingChallenge.Data.Models;
using CodingChallenge.Data.Repository;
using CodingChallenge.Services.Person;
using CodingChallenge.Controllers;

namespace CodingChallenge
{
	public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
			// Add DbContext EF	
			services.AddDbContext<CodingChallengeContext>(opt => opt.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
			// DI Repos
			services.AddScoped<ICodingChallengeRepository<Person>, CodingChallengeRepository<Person>>();
			// DI Services
			services.AddTransient<IPersonService, PersonService>();
			// AutoMapper
			services.AddAutoMapper(cfg => cfg.AddProfile<ProjectMapperProfile>());

			services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true,
                    ReactHotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

			app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }
    }
}
