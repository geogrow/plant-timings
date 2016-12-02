class HelloWorldController < ApplicationController
  def index
    @hello_world_props = coords.to_json
  end

  def coords
    stands.select('min_long', 'max_long', 'min_lat', 'max_lat')
  end

  def stands
    @stands = Stand.all
  end

end
