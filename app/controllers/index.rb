get '/' do
  erb :map_view
end

# don't need 'create' on this route; remember, RESTful conventions dictate that
#  the verb 'post' tells us what we're doing: creating a spot
post '/spots/create' do

  new_spot = Spot.create(
    :description=>params[:description],
    :address=>params[:address],
    :title=>params[:title],
    :lng=>params[:longitude],
    :lat=>params[:latitude],
    :pov=>params[:pov],
    :link=>params[:link]
  )

  {new_spot_id: new_spot.id}.to_json
end

# same comment as above; 'list' is not necessary
get '/spots/list' do
  Spot.all.to_json
end

# because we're finding a spot, this should probably be a 'get,' not a 'post.' Also,
#  shouldn't need the 'find,' use a querystring to supply search parameters
post '/spots/find' do

  spot = Spot.find(params[:id].to_i)

  {
    title: spot.title,
    description: spot.description,
    address: spot.address,
    lat: spot.lat,
    lng: spot.lng,
    pov: spot.pov,
    id: spot.id,
    link: spot.link
  }.to_json
end

# again, don't need the 'delete' in the URL
delete '/spots/delete' do
  Spot.destroy(params[:id].to_i)

  # send back some sort of valid response!
  'yay'
end