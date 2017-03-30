class LineItem < ApplicationRecord
  belongs_to :cart
  belongs_to :item

  def cost
    quantity * item.price
  end
end
