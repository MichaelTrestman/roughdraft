class Spot < ActiveRecord::Base
  validates :lat, presence: true
  validates :lat, numericality: true
  validates :lng, presence: true
  validates :lng, numericality: true
  belongs_to :collection

end