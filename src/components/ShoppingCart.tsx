import { Offcanvas, OffcanvasBody, OffcanvasHeader, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json"
import { formatCurrency } from "../utils/formatCurrency";

type ShoppingCartProps = {
    isOpen: boolean 
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart()
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <OffcanvasHeader closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </OffcanvasHeader>
            <OffcanvasBody>
                <Stack gap={3}>
                    {cartItems.map( item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find(i => i.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0)
                        )}
                    </div>
                </Stack>
            </OffcanvasBody>
        </Offcanvas>
    )
}