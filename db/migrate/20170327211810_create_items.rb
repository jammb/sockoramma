class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :title
      t.text :description
      t.string :picture
      t.string :price
      t.references :material, foreign_key: true
      t.references :color, foreign_key: true
      t.references :style, foreign_key: true

      t.timestamps
    end
  end
end
