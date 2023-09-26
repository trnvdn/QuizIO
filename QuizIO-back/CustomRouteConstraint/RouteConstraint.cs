using System.Text.RegularExpressions;

namespace QuizIO_back
{
    public class RouteConstraint : IRouteConstraint
    {
        public bool Match(HttpContext httpContext, IRouter route, string routeKey, RouteValueDictionary values, RouteDirection routeDirection)
        {
            if (values.TryGetValue(routeKey, out var value) && value != null)
            {
                var valueString = Convert.ToString(value);
                return Regex.IsMatch(valueString, "^[a-zA-Z0-9-]*$");
            }
            return false;
        }
    }
}
