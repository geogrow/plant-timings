json.array!(@stands) do |stand|
  json.extract! stand, :id, :latitude, :longitude, :square_m, :bounds, :description, :landtype, :habitat, :plants, :primary_plant, :gradient, :founder
  json.url stand_url(stand, format: :json)
end
