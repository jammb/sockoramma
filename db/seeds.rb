# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'
require 'pry'

file_name = 'sockorama_inventorys.csv'

def parse_data( body )
  puts "Starting Seed"
  products = []
  CSV.foreach(body, :headers => true, :header_converters => :symbol) do |row|
      product = row.to_hash
      products << product
  end

  products.each do |product|
    # binding.pry
    material = Material.find_or_create_by(name: product[:material])
    color = Color.find_or_create_by(name: product[:color])
    style = Style.find_or_create_by(name: product[:style])
    item = Item.create(
    title: product[:title],
    description: product[:description],
    picture: product[:photo],
    price: product[:price],
    material_id: material.id,
    color_id: color.id,
    style_id: style.id
    )
    size = Size.find_or_create_by(
      name: product[:size]
    )
    Quantity.create(
      item_id: item.id,
      size_id: size.id,
      quantity: product[:quantity]
    )

  end
  puts "Seeding Complete"
end

parse_data(file_name)
