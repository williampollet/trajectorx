class PlanetsController < ApplicationController
  include ReactOnRails::Controller

  def index
    @rocket_props = {
      rocket_status: "grounded" ,
      time: 0,
      rocket_speed: 0,
      x: 0,
      y: 0,
    }
  end
end
