class CreateQuantities < ActiveRecord::Migration[5.0]
  def change
    create_table :quantities do |t|
      t.references :item, foreign_key: true
      t.references :size, foreign_key: true
      t.integer :quantity

      t.timestamps
    end
  end
end
