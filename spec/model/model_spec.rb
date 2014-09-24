require 'spec_helper'

describe "User" do

  before(:all) do
    @blobs = User.create(
      :username=>"blobby",
      :first_name=>"Blobs",
      :last_name=>"McBlobberstein",
      :email=>"blobs@crap.com",
      :password=>"umm so need to use bcrypt here i guess"
    )
  end

  it "has a username" do
    expect(@blobs.username).to eq "blobby"
  end

  it "has a valid email" do
    expect(@blobs.email).to eq "blobs@crap.com"
  end

  it "has a first and last name" do
    expect(@blobs.first_name).to eq "Blobs"
    expect(@blobs.last_name).to eq "McBlobberstein"
  end

  it "can create a collection" do
    expect(@blobs).to respond_to :create_new_collection
  end

  context 'after it has created collections' do
    before(:all) do
      @blobs.collections << Collection.create(:title=>"Blobs' cool spots")
      @blobs.collections << Collection.create(:title=>"Blobs' shitty spots")
    end
    it "has many collections" do
      expect(@blobs.collections.length).to eq 2
    end
  end

end

describe "Collection" do

  before(:all) do
    @some_things = Collection.create(:title=>"Some things!")
  end

  it "can have many Spots" do
    @some_things.spots << Spot.create(:title=>"a spot")
    @some_things.spots << Spot.create(:title=>"another spot")
  end
  it "can have a new Spot added" do


  end
  it "can have a Spot removed" do

  end

  it "can be published to a website or as a private link" do

  end
  it "can have a description" do
    @some_things.description = "a collection of spots or whatever"
    expect(@some_things.description).to eq "a collection of spots or whatever"
  end

  it "can be ordered into a path" do

  end
end

describe "Spot" do
  before(:all) do
    @some_spot = Spot.new(
      #stuff
    )
  end

  it "can have a description" do
    @some_spot.description = "this spot is cool"
    expect(@some_spot.description).to eq "this spot is cool"
  end
  it "can have pictures" do


  end
  it "can have contact info" do

  end
  it "has a map location" do

  end
  it "can redirect to google map directions" do

  end
  it "can have its information updated" do

  end
end
