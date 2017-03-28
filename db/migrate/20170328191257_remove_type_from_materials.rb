class RemoveTypeFromMaterials < ActiveRecord::Migration[5.0]
  def change
    remove_column :materials, :type, :string
  end
end
