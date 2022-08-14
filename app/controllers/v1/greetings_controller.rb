class V1::GreetingsController < ApplicationController
  def index
    render json: { greetings: Greeting.all.sample.greeting }.to_json
  end
end