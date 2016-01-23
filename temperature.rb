require "rack"

class TemperatureConverter
  def self.call(env)
    request = Rack::Request.new(env)
    params = request.params
    temp_in_f = params["temp"].to_f
    temp_in_c = (((temp_in_f - 32) * 5)/9).round(2)

    [200, {"Content-Type" => "text/html"}, ["<h1>Temperature in C: #{temp_in_c}</h1>"]]
  end
end

Rack::Handler::WEBrick.run TemperatureConverter
