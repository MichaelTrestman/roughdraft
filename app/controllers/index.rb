get '/' do
  erb :map_view
end

post '/spots/create' do

  new_spot = Spot.create(
    :description=>params[:description],
    :title=>params[:title],
    :lng=>params[:longitude],
    :lat=>params[:latitude]

  )

  {new_spot_id: new_spot.id}.to_json
end

get '/spots/list' do
  Spot.all.to_json
end
