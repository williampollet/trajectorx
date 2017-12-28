class PlanetsController < ApplicationController
  include ReactOnRails::Controller

  def index
    @rocket_props = {
      rocketStatus: 'grounded' ,
      timer: 0,
      positionX: 0,
      positionY: 10,
      launchAngle: 60,
      launchVelocity: 1000,
    }
  end
end
