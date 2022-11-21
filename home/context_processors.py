from store.models import Cart

# define a function
def cart(request):
    reading = Cart.objects.filter(user__username = request.user.username, paid=False)

    cartcount = 0
    for items in reading:
        cartcount += items.quantity
         
        context = {
            'cartcount':cartcount,
        }
        return context