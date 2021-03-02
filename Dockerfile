FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS runtime
WORKDIR /app
COPY ./bin/Release/netcoreapp3.1/publish .
CMD ASPNETCORE_URLS=http://*:$PORT dotnet AngularNetCore.dll