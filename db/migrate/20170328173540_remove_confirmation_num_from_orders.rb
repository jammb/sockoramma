class RemoveConfirmationNumFromOrders < ActiveRecord::Migration[5.0]
  def change
    remove_column :orders, :confirmation_number, :string
  end
end
