using QuizIO_back;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowDevelopmentOrigin", builder =>
    {
        builder
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
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

app.UseCors("AllowDevelopmentOrigin"); 

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();