class Stand < ActiveRecord::Base

  def coords
    stands.select('min_long', 'max_long', 'min_lat', 'max_lat')
  end

  def stands
    @stands = Stand.all
  end
end
