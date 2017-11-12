class TestsController < ApplicationController  
  def index
    @hello_world_props = { name: "blurb" }
  end
end
