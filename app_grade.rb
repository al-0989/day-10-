require "rack"

class ReverseApp
  def self.call(env)
    request = Rack::Request.new(env)
    params = request.params
    grade = params["grade"].to_i

    if grade > 85
      output = "A"
    elsif grade > 75
      output = "B"
    elsif grade > 65
      output = "C"
    elsif grade > 55
      output = "D"
    else
      output = "F"
    end

    [200, {"Content-Type" => "text/html"}, ["<h1>Grade: #{output}</h1>"]]
  end
end

Rack::Handler::WEBrick.run ReverseApp
