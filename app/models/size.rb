class Size < ApplicationRecord
  has_many :itms, through: :quantities 
end
