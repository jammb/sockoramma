class AddFeaturedToItems < ActiveRecord::Migration[5.0]
  def change
    add_column :items, :featured, :boolean
  end
end
