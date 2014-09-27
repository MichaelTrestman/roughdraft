require 'bcrypt'

class User < ActiveRecord::Base
  include BCrypt

  has_many :collections
  has_many :spots, through: :collections

  validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end
  def create_new_collection(args)
    this.collections < Collection.create(
        :description=>agrs[:description]
      )
  end

end
