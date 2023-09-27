using QuizIO_back;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy",
        builder => builder
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader()
            .WithExposedHeaders("Content-Disposition"));
});

builder.Services.Configure<RouteOptions>(options =>
{
    options.ConstraintMap.Add("alphaNumericHyphen", typeof(RouteConstraint));
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("CorsPolicy");
app.UseCors("AllowDevelopmentOrigin"); 

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();