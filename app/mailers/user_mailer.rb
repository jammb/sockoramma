class UserMailer < ApplicationMailer

  def signup(user)
    @user = user
    mail(:to => @user.email, subject: "Thanks for signing up at Sock-o-Rama, your go to place for socks!")
  end

end
