get '/' do
  erb :map_view
end

post '/spots/create' do

  new_spot = Spot.create(
    :description=>params[:description],
    :address=>params[:address],
    :title=>params[:title],
    :lng=>params[:longitude],
    :lat=>params[:latitude],
    :pov=>params[:pov]
  )

  {new_spot_id: new_spot.id}.to_json
end

get '/spots/list' do
  Spot.all.to_json
end


post '/spots/find' do

  spot = Spot.find(params[:id].to_i)

  {
    title: spot.title,
    description: spot.description,
    address: spot.address,
    lat: spot.lat,
    lng: spot.lng,
    pov: spot.pov
  }.to_json
end