get '/' do
  erb :map_view
end

post '/spot/create' do

  p params[:description]
  p params[:title]
  p params[:longitude]
  p params[:latitude]

  Spot.create(
    :description=>params[:description],
    :title=>params[:title],

  )

  {message: "hello!"}.to_json
end

