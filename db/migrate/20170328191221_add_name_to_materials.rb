class AddNameToMaterials < ActiveRecord::Migration[5.0]
  def change
    add_column :materials, :name, :string
  end
end
