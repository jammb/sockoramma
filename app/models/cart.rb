class Cart < ApplicationRecord
  belongs_to :user_id, optional: true
  has_many :line_items
  has_many :items, through: :line_items

  has_secure_token

  def total_cost
    (line_items.map(&:cost) * SALES_TAX) + shipping_cost
  end

  def shipping_cost
    line_items.sum(:quantity) * PER_ITEM_SHIPPING
  end

  
end
