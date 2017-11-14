class PlanetsController < ApplicationController
  include ReactOnRails::Controller

  def index
    @rocket_props = { rocket_status: "grounded" }
  end
end
