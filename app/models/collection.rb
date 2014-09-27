class Collection < ActiveRecord::Base
  has_many :spots
  belongs_to :user

end
