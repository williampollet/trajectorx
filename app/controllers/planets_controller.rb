class PlanetsController < ApplicationController
  include ReactOnRails::Controller

  def index
    @rocket_props = {
      rocket_status: "grounded" ,
      timer: 0,
    }
  end
end
