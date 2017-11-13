class PlanetsController < ApplicationController
  def index
    @rocket_props = { rocket_status: "grounded" }
  end
end
