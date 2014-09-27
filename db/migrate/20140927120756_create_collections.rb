class CreateCollections < ActiveRecord::Migration
  def change
    create_table :collections do |t|
      t.belongs_to :user
      t.string :description
      t.string :title
    end
  end
end
