class RemoveCutFromStyles < ActiveRecord::Migration[5.0]
  def change
    remove_column :styles, :cut, :string
  end
end
